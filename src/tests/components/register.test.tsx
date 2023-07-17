import { render, screen } from '@testing-library/react';
import { Register } from '../../components';

describe('Tests on <Register /> component', () => {
  test('Should have a headings elements', () => {
    render(<Register />);
    const heading = screen.getByRole('heading', { level: 1 });
    const subHeading = screen.getByRole('heading', {
      name: 'Fill the form to register',
      level: 2,
    });
    const bioHeading = screen.getByRole('heading', {
      name: 'Write your biography here:',
      level: 2,
    });
    expect(heading).toBeInTheDocument();
    expect(subHeading).toBeInTheDocument();
    expect(bioHeading).toBeInTheDocument();
  });

  test('Should have an image profile', () => {
    render(<Register />);
    const image = screen.getByAltText('User Facebook profile');
    expect(image).toBeInTheDocument();
  });

  test('Should have instructions text', () => {
    render(<Register />);

    const textElement = screen.getByText('All fields are mandatory', {
      selector: 'p'
    });

    expect(textElement).toBeInTheDocument();
  });

  test('Should contains Form Elements', () => {
    render(<Register />);
    const firstNameInput = screen.getByRole('textbox', { name: 'First Name' });
    const lastNameInput = screen.getByLabelText('Last Name');
    const emailInput = screen.getByLabelText('Email', { selector: 'input' });
    const emailInput2 = screen.getByPlaceholderText("johndoe@somedomain.com");
    const selectJobLocationElement = screen.getByRole('combobox', { name: 'Job Location' });
    const bioTextAreaElement = screen.getByRole('textbox', { name: 'Bio' });
    const termsCheckboxElement = screen.getByRole('checkbox', { name: 'I agree to the terms and conditions' });
    const termsCheckboxElement2 = screen.getByLabelText('I agree to the terms and conditions');
    const priceElement = screen.getByDisplayValue('0'); 
    const submitButtonElement = screen.getByRole('button', { name: 'Send' });

    expect(firstNameInput).toBeInTheDocument();
    expect(firstNameInput).toHaveAttribute('type', 'text');        

    expect(lastNameInput).toBeInTheDocument();
    expect(lastNameInput).toHaveAttribute('type', 'text');

    expect(emailInput).toBeInTheDocument();
    expect(emailInput).toHaveAttribute('type', 'email');
    expect(emailInput2).toBeInTheDocument();

    expect(selectJobLocationElement).toBeInTheDocument();

    expect(bioTextAreaElement).toBeInTheDocument();

    expect(termsCheckboxElement).toBeInTheDocument();
    expect(termsCheckboxElement2).toBeInTheDocument();

    expect(priceElement).toBeInTheDocument();

    expect(submitButtonElement).toHaveAttribute('type', 'submit');
  });

  test('Should have link to register', () => {
    render(<Register />);

    const linkElement = screen.getByTitle('Read Policies and regulations');

    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', '/policy');
  });

  test('Should have text policy and regulations message', () => {
    render(<Register />);

    const textElement = screen.getByTestId('policy-regulation-message');

    expect(textElement).toBeInTheDocument();
  });

  
});
