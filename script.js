function showTab(tabName) {
    const tabs = document.querySelectorAll('.tab-content');
    const buttons = document.querySelectorAll('.tab-button');
    
    tabs.forEach(tab => {
        tab.classList.remove('active');
    });
    
    buttons.forEach(button => {
        button.classList.remove('active');
    });
    
    document.getElementById(tabName).classList.add('active');
    event.target.classList.add('active');
}

function downloadData() {
    alert('Download data functionality will be implemented here.');
}

function generateSAPFiles() {
    const date = document.getElementById('date').value;
    if (date) {
        alert(`Generating SAP files for date: ${date}`);
    } else {
        alert('Please select a date.');
    }
}
