const SUPABASE_URL = 'https://tqjuxzcqnzwfskjfnhdd.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRxanV4emNxbnp3ZnNramZuaGRkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg3MTA4MjIsImV4cCI6MjA3NDI4NjgyMn0.0-kC5SBP4wOvGLvklBAozrGJ_52Cjy6fTHkDA0gD__g'

const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

async function fetchData() {
  const { data, error } = await supabase
    .from('public.reports') 
    .select('*');

  if (error) {
    console.error('Error fetching data:', error.message);
    return;
  }

  return data;
}

async function displayData() {
  const data = await fetchData();
  const container = document.getElementById('data-container');

  if (!data) {
    container.innerHTML = '<p>No data found or an error occurred.</p>';
    return;
  }

  // Clear previous content
  container.innerHTML = '';

  // Iterate over the data and create a list of items
  const ul = document.createElement('ul');
  data.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item.report_name; // Replace 'name' with your column name
    ul.appendChild(li);
  });

  container.appendChild(ul);
}

// Call the function to display the data when the page loads
displayData();