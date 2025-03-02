<script>
    // JavaScript to toggle light/dark mode
    const toggle = document.getElementById('toggle'); // Assuming you have a toggle switch with this ID
    toggle.addEventListener('change', () => {
        document.body.classList.toggle('dark-mode');
        document.body.classList.toggle('light-mode');
    });
</script>