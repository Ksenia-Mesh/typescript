import Cart from '../ts/Cart';
import Movie from '../ts/Movie';


test('test 1', () => {
  const movie = new Movie(
1,
'The Avengers',
true,
    'Мстители',
    2012,
    'США',
    'Avengers Assemble!',
    ['фантастика', 'боевик', 'фэнтези', 'приключения'],
    137,
    1000,
    'avengers_img.png',
);
  const cart = new Cart();
    cart.add(movie);
  expect(cart.getAll().includes(movie)).toBeTruthy();
});


test('test 2', () => {
  const movie = new Movie(
1,
'The Avengers',
true,
    'Мстители',
    2012,
    'США',
    'Avengers Assemble!',
    ['фантастика', 'боевик', 'фэнтези', 'приключения'],
    137,
    1000,
    'avengers_img.png',
);
  const cart = new Cart();
    cart.add(movie);
  expect(cart.getAll().length).toBe(1);
});