import Papa from 'papaparse';

const fetchCsv = async () => {
  const response = await fetch('data/data.csv');
  const reader = response.body.getReader();
  const result = await reader.read();
  const decoder = new TextDecoder('utf-8');
  const csv = await decoder.decode(result.value);
  return csv;
};

const getData = async () => {
  try {
    const response = Papa.parse(await fetchCsv(), {
      header: true,
      skipEmptyLines: true,
    });

    return response.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export default getData;
