import { Title } from '@/components/shared/Title';
import { Container } from '@/components/shared/Container';
import { TopBar } from '@/components/shared/TopBar';
import { Filters } from '@/components/shared/filters/Filters';
import { ProductsListGroup } from '@/components/shared/products/ProductsListGroup';

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="All" size="lg" className="font-extrabold" />
      </Container>

      <TopBar />

      <Container className="pb-14 mt-10">
        <div className="flex gap-[60px]">
          <div className="w-[250px]">
            <Filters />
          </div>
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsListGroup
                title="Pizza"
                categoryId={1}
                items={[
                  {
                    id: 1,
                    name: 'Carbonara',
                    price: 10,
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/0197d0d4283575589ff0032eadd7cb68.jpg',
                    className: '',
                    items: [{ price: 10 }],
                  },
                  {
                    id: 2,
                    name: 'Salami',
                    price: 10,
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/0197d0f934c372c3b17f812f340dc1ca.jpg',
                    className: '',
                    items: [{ price: 10 }],
                  },
                  {
                    id: 3,
                    name: 'Margarita',
                    price: 10,
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11ee7d610d2925109ab2e1c92cc5383c.jpg',
                    className: '',
                    items: [{ price: 10 }],
                  },
                  {
                    id: 4,
                    name: 'Napolitano',
                    price: 10,
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/019591b642d87304a62d322945990861.jpg',
                    className: '',
                    items: [{ price: 10 }],
                  },
                ]}
              />

              <ProductsListGroup
                title="Breakfest"
                categoryId={2}
                items={[
                  {
                    id: 1,
                    name: 'Carbonara',
                    price: 10,
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/0197d0d4283575589ff0032eadd7cb68.jpg',
                    className: '',
                    items: [{ price: 10 }],
                  },
                  {
                    id: 2,
                    name: 'Salami',
                    price: 10,
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/0197d0f934c372c3b17f812f340dc1ca.jpg',
                    className: '',
                    items: [{ price: 10 }],
                  },
                  {
                    id: 3,
                    name: 'Margarita',
                    price: 10,
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11ee7d610d2925109ab2e1c92cc5383c.jpg',
                    className: '',
                    items: [{ price: 10 }],
                  },
                  {
                    id: 4,
                    name: 'Napolitano',
                    price: 10,
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/019591b642d87304a62d322945990861.jpg',
                    className: '',
                    items: [{ price: 10 }],
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
