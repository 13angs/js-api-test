export const items = [
  { name: 'romdon' },
  { name: 'romdon' },
  { name: 'romdon' },
  { name: 'suha' },
  { name: 'suha' },
  { name: 'suha' },
  { name: 'romdon' },
  { name: 'naya' },
  { name: 'naya' },
  { name: 'naya' },
  { name: 'naya' },
  { name: 'naya' },
  { name: 'naya' },
  { name: 'naya' },
];

const arrayFilter = () => {
  const show = ['naya', 'suha'];
  return items.filter((item) => show.includes(item.name));
};

export default arrayFilter;
