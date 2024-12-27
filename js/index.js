function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const content = document.getElementById('main-content');
    const header = document.getElementById('main-content-header');

    sidebar.classList.toggle('active');
    content.classList.toggle('active');
    header.classList.toggle('active');

    if (sidebar.classList.contains('active')) {
        content.classList.remove('col-md-10');
        content.classList.add('col-md-12');
        sidebar.classList.remove('col-md-2');
        sidebar.classList.add('col-md-0');
        header.style.justifyContent = 'space-between';
    } else {
        content.classList.remove('col-md-12');
        content.classList.add('col-md-10');
        sidebar.classList.remove('col-md-0');
        sidebar.classList.add('col-md-2');
        header.style.justifyContent = 'flex-end';
    }
}