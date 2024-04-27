import React from 'react';
import { DataCollection, IterableCollection } from './data-collection';

// Define a simple Item component
interface ItemProps {
  value: any;
}

const Item: React.FC<ItemProps> = ({ value }) => {
  return <li>{value}</li>;
};

// Parent component that renders items using the Iterator
interface ItemListProps<T> {
  data: IterableCollection<T>;
}

const ItemList = <T,>({ data }: ItemListProps<T>) => {
  const iterator = data.createIterator();
  const items: React.ReactNode[] = [];

  while (iterator.hasNext()) {
    const itemValue = iterator.next();
    items.push(<Item key={itemValue!.toString()} value={itemValue} />);
  }

  return <ul>{items}</ul>;
};

// Example usage
const Iterator: React.FC = () => {
  const data = new DataCollection<number>([1, 2, 3, 4, 5]);

  return (
    <div>
      <h2>List of Numbers</h2>
      <ItemList data={data} />
    </div>
  );
};

export default Iterator;
