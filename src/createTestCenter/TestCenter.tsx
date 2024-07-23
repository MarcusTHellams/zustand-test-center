import { useLocalStorage } from '@mantine/hooks';
import { useState } from 'react';

import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components';

export const MyTestCenter = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const [value] = useLocalStorage({
    key: 'testCenter',
  });
  return (
    <>
      <main className="container mt-16">
        <Button onClick={() => setModalOpen(true)}>Show Test Center</Button>
      </main>
      <Dialog
        open={modalOpen}
        onOpenChange={() => {
          setModalOpen((prev) => !prev);
        }}
      >
        <DialogContent className="DialogContent">
          <DialogHeader>
            <DialogTitle>Stuff</DialogTitle>
          </DialogHeader>
          {value ? (
            <pre className="max-h-[50vh]">{JSON.stringify(JSON.parse(value), null, 2)}</pre>
          ) : null}
        </DialogContent>
      </Dialog>
    </>
  );
};
