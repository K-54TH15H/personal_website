const sideico = document.getElementById('sideico');
const sidebar = document.getElementById('sidebar');

//toggle
sideico.addEventListener('click', (e) => {
	e.preventDefault();

	if (sidebar.style.display === 'flex')
	{
		sidebar.style.display = 'none';
	}
	else
	{
		sidebar.style.display = 'flex';
	}
})
