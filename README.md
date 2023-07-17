# Testing React

## Priority Query in Testing Library

### 1. Get By Role

```typescript
screen.getByRole('textbox', { name: 'First Name' });
```

### 2. Get By Label Text

```typescript
screen.getByLabelText('First Name');
```

### 3. Get By Placeholder Text

```typescript
screen.getByPlaceholderText("johndoe@somedomain.com");
```

### 4. Get By Text

```typescript
const textElement = screen.getByText(
  'All fields are mandatory', {
    selector: 'p'
  }
);
```

### 5. Get By Display Value

```jsx
<input
  type="number"
  id="price"
  name="price"
  value="0"
  onChange={() => {}}
/>
```

```typescript
screen.getByDisplayValue('0');
```

### 6. Get By Alt Text

```jsx
<img
  src="images/profile.jpg"
  alt="User Facebook profile"
/>
```

```typescript
screen.getByAltText('User Facebook profile');
```

### 7. Get By Title

```jsx
<a
  href="/policy"
  title="Read Policies and regulations"
>Policy</a>
```
```typescript
screen.getByTitle('Read Policies and regulations');
```

### 8. Get By Test Id

```jsx
<p data-testid="policy-regulation-message">
  Read Policy and Regulations:
</p>
```

```typescript
screen.getByTestId('policy-regulation-message');
```