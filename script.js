document.querySelectorAll('.package').forEach(pkg => {
  pkg.addEventListener('click', () => {
    document.querySelectorAll('.package').forEach(p => p.classList.remove('selected'));
    pkg.classList.add('selected');
    const price = pkg.getAttribute('data-price');
    document.getElementById('rechargeBtn').textContent = 'Recharge Now - ₹' + price;
  });
});

document.getElementById('rechargeBtn').addEventListener('click', () => {
  const userId = document.getElementById('userId').value;
  const serverId = document.getElementById('serverId').value;
  if (!userId || !serverId) {
    alert('Please fill in User ID and Server ID');
    return;
  }
  alert('Recharge processed (demo) for ' + userId + ' on Server ' + serverId);
});
