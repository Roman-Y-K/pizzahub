import Image from 'next/image';

import { Button } from '@/components/ui/button';
import { Title } from '@/components/shared/Title';
import { Container } from '@/components/shared/Container';
import { TopBar } from '@/components/shared/TopBar';
import { SortPopup } from '@/components/shared/SortPopup';

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="All" size="lg" className="font-extrabold" />
      </Container>
      <TopBar />
    </>
  );
}
