function GerarQRCode() {
    var inputUsuario = document.querySelector('textarea').value;
    var GoogleChartAPI = 'https://chart.googleapis.com/chart?cht=qr&chs=300x300&chld=H&chl=';
    var conteudoQRCode = GoogleChartAPI + encondeURIComponent(inputUsuario);
    document.querySelector('#QRCodeImage').src = conteudoQRCode;
}