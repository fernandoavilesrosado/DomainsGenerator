window.onload = function () {
    Domains()
}
function Domains() {

    let firstNames = ['fernando', 'fer', 'fa', ];
    let lastNames = ['aviles', 'rosado', 'vi'];
    let extens = ['.com', '.es', '.org'];

    let resultDomain = [];
    for (const firstName of firstNames) {
        for (const lastname of lastNames) {
            for (const exten of extens) {
                    resultDomain.push(firstName.concat(lastname, exten) )
            }

        }
    }
    console.log(resultDomain);
        document.querySelector('#domain').innerHTML = domain;
}