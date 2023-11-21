import OrderTable from './components/OrderTable';
import OrderList from './components/OrderList';

import InnerLayout from '../../layouts/InnerLayout';
import { useAppContent } from 'pocketbase-react';
import Course from '../../types/course';

export default function Orders() {
  const { records } = useAppContent<Course>('courses', true);

  return (
    <InnerLayout>
      <OrderTable courses={records} />
      <OrderList />
    </InnerLayout>
  );
}
