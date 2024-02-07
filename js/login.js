input.addEventListener('input', evt => {
    const value = input.value.trim()
  if (value) {
      input.dataset.state = 'valid'
    } else {
      input.dataset.state = 'invalid'
    }
  })