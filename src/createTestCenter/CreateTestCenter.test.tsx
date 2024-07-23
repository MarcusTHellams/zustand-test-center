import { PropsWithChildren, useRef } from 'react';
import { MemoryRouter } from 'react-router-dom';

import { render, screen, userEvent } from '@/tests/test-utils';

import {
  CreateTestCenter,
  CreateTestCenterContext,
  getCreateTestCenterStore,
  useCreateTestCenterStore,
} from '.';

const Wrapper = ({ children }: PropsWithChildren) => {
  return <MemoryRouter>{children}</MemoryRouter>;
};

describe('Testing CreateTestCenter', () => {
  it('should render with no issues', async () => {
    const user = userEvent.setup();
    render(
      <Wrapper>
        <CreateTestCenter />
      </Wrapper>,
    );

    // STEP ONE
    expect(
      screen.getByRole('heading', { name: /test center/i }),
    ).toBeInTheDocument();

    await user.type(
      screen.getByRole('textbox', { name: /test center name/i }),
      'test center',
    );
    await user.type(
      screen.getByRole('textbox', { name: /website/i }),
      'website',
    );
    await user.type(
      screen.getByRole('textbox', { name: /phone/i }),
      '+1555555555',
    );
    await user.type(
      screen.getByRole('textbox', { name: /address 1/i }),
      'address 1',
    );
    await user.type(
      screen.getByRole('textbox', { name: /address 2/i }),
      'address 2',
    );
    await user.type(
      screen.getByRole('textbox', { name: /address 3/i }),
      'address 3',
    );
    await user.type(screen.getByRole('textbox', { name: /city/i }), 'city');

    await user.selectOptions(
      screen.getByTestId('state').querySelector('select')!,
      'AZ',
    );

    await user.type(screen.getByRole('textbox', { name: /zip 5/i }), '55555');
    await user.type(screen.getByRole('textbox', { name: /zip 4/i }), '4444');

    await user.click(
      screen.getByRole('button', { name: /primary coordinator/i }),
    );

    // STEP TWO

    expect(
      screen.getByRole('heading', { name: /primary coordinator/i }),
    ).toBeInTheDocument();

    await user.type(
      screen.getByRole('textbox', { name: /first name/i }),
      'first name',
    );

    await user.type(
      screen.getByRole('textbox', { name: /last name/i }),
      'last name',
    );
    await user.type(screen.getByRole('textbox', { name: /title/i }), 'title');
    await user.type(
      screen.getByRole('textbox', { name: /email/i }),
      'jwick@gmail.com',
    );
    await user.type(
      screen.getByRole('textbox', { name: /phone/i }),
      '+15555555555',
    );

    await user.click(screen.getByRole('button', { name: /previous/i }));
    expect(
      screen.getByRole('heading', { name: /test center/i }),
    ).toBeInTheDocument();

    await user.click(
      screen.getByRole('button', { name: /primary coordinator/i }),
    );

    await user.click(screen.getByRole('button', { name: /next/i }));

    // STEP THREE
    expect(
      screen.getByRole('heading', { name: /primary coordinator address/i }),
    ).toBeInTheDocument();

    await user.type(
      screen.getByRole('textbox', { name: /address 1/i }),
      'address 1',
    );
    await user.type(
      screen.getByRole('textbox', { name: /address 2/i }),
      'address 2',
    );
    await user.type(
      screen.getByRole('textbox', { name: /address 3/i }),
      'address 3',
    );
    await user.type(screen.getByRole('textbox', { name: /city/i }), 'city');

    await user.selectOptions(
      screen.getByTestId('state').querySelector('select')!,
      'AZ',
    );

    await user.type(screen.getByRole('textbox', { name: /zip 5/i }), '55555');
    await user.type(screen.getByRole('textbox', { name: /zip 4/i }), '4444');

    await user.click(screen.getByRole('button', { name: /previous/i }));
    expect(
      screen.getByRole('heading', { name: /primary coordinator/i }),
    ).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: /next/i }));

    await user.click(screen.getByRole('button', { name: /next/i }));

    // STEP FOUR
    expect(
      screen.getByRole('heading', { name: /shipping coordinator/i }),
    ).toBeInTheDocument();

    await user.type(
      screen.getByRole('textbox', { name: /first name/i }),
      'first name',
    );

    await user.type(
      screen.getByRole('textbox', { name: /last name/i }),
      'last name',
    );
    await user.type(screen.getByRole('textbox', { name: /title/i }), 'title');
    await user.type(
      screen.getByRole('textbox', { name: /email/i }),
      'jwick@gmail.com',
    );
    await user.type(
      screen.getByRole('textbox', { name: /phone/i }),
      '+15555555555',
    );

    await user.click(screen.getByRole('button', { name: /previous/i }));
    expect(
      screen.getByRole('heading', { name: /primary coordinator address/i }),
    ).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: /next/i }));

    await user.click(screen.getByRole('button', { name: /next/i }));
    // STEP FIVE
    expect(
      screen.getByRole('heading', { name: /Tech Coordinator/i }),
    ).toBeInTheDocument();
  });
});
