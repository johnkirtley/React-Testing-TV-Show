import React from 'react';
import { render } from '@testing-library/react';
import Episodes from './Episodes';

test('Episode Component renders correctly', () => {
    const { queryByTestId } = render(<Episodes episodes={[]} />)
    // const getMockData = jest.fn();
    // const { getByText, queryByText } = render(
    //     <Episodes episodes={getMockData} />
    // );
})