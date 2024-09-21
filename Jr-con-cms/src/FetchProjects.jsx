import { createClient } from 'contentful';
import { useEffect } from 'react';
import { useState } from 'react';

const client = createClient({
  space: '9vw7kjv9i1d3',
  environment: 'master',
  accessToken: 'N1AuxDAG0TZkE6qvywXn5MopO6UIo8ph6Uc-yBap2B8',
});

const useFetchProjects = () => {
  const [isLoading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);
  const getData = async () => {
    try {
      const response = await client.getEntries({ content_type: 'projects' });
      const projects = response.items.map((item) => {
        const { title, url, image } = item.fields;
        const id = item.sys.id;
        const img = image?.fields?.file?.url;
        return { id, title, url, img };
      });
      setProjects(projects);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return { isLoading, projects };
};
export default useFetchProjects;
