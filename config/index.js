import AddCount from 'containers/AddCount/connector';
import Clock from 'containers/Clock/connector';

export const tabs = [
  { title: 'Count', content: <AddCount /> },
  { title: 'Clock', content: <Clock /> },
];
