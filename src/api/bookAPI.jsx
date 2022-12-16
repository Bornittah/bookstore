const API_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';

const id = 'npr8AJRrxMvciS8Udo1J';

export const getBooks = async () => {
  const response = await fetch(`${API_URL}/apps/${id}/books`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  const bookList = [];
  const books = await response.json();
  Object.keys(books).forEach((book) => {
    books[book][0].itemId = book;
    bookList.push(books[book][0]);
  });
  return bookList;
};

export const postBook = async (details) => {
  const response = await fetch(`${API_URL}/apps/${id}/books`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(details),
    });
  await response.text();
  const bookdetails = { ...details, itemId: details.item_id };
  delete bookdetails.item_id;
  return bookdetails;
};

export const deleteBook = async (itemId) => {
  const response = await fetch(`${API_URL}/apps/${id}/books/${itemId}`,
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  await response.text();
  return itemId;
};
