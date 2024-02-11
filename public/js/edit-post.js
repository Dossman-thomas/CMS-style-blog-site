// edit button href handler
document.addEventListener('DOMContentLoaded', () => {
  const editButtons = document.querySelector('.edit-btn');

  editButtons.addEventListener('click', (event) => {
    const postId = event.target.dataset.id;
    window.location.href = `/editpost/${postId}`;
  });
});


// editPostSubmitHandler
const editPostSubmitHandler = async (event) => {

  event.preventDefault(); 

  const id = event.target.getAttribute('data-id');
  const title = event.querySelector('#edit-title').value.trim();
  const content = event.querySelector('#edit-content').value.trim(); 

  const response = await fetch(`/api/post/${id}`, {
    method: 'PUT',
    body: JSON.stringify({ title, content }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  console.log(response);

  if (response.ok) {

    document.location.replace('/dashboard');

  } else {

    alert('Failed to edit post');

  }

};

document
  .querySelector('.edit-post-form')
  .addEventListener('submit', editPostSubmitHandler);