function toggleForm() {
    const loginBox = document.getElementById('loginBox');
    const signupBox = document.getElementById('signupBox');
    loginBox.style.display = loginBox.style.display === 'none' ? 'block' : 'none';
    signupBox.style.display = signupBox.style.display === 'none' ? 'block' : 'none';
  }
  
  // Demo user storage
  let users = [];
  
  function signup() {
    const username = document.getElementById('signupUsername').value;
    const password = document.getElementById('signupPassword').value;
  
    if (username && password) {
      users.push({ username, password });
      alert('Signup successful!');
      toggleForm();
    } else {
      alert('Please enter both username and password.');
    }
  }
  
  function login() {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
  
    const user = users.find(u => u.username === username && u.password === password);
    
    if (user) {
      alert(`Welcome, ${username}!`);
    } else {
      alert('Invalid login credentials.');
    }
  }
  