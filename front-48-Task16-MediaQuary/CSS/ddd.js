window.onload = function() {
    let checkbox = document.querySelector('input[type=checkbox]');
    checkbox.addEventListener('change', function() {
        if (checkbox.checked) {
            document.querySelector('.container p:not(#pp)').style.color = 'rgb(97, 95, 95)';
            document.querySelector('.container #pp').style.color = 'black';
            document.querySelector('.parent').style.display = 'none';
            document.querySelector('.parent2').style.display = 'flex';
            document.querySelector('.parent2').style.gap = "3.5%";
            document.querySelector('.monthly').style.display = 'none';
            document.querySelector('.yearly').style.display = 'block';
        } else {
            document.querySelector('.container p:not(#pp)').style.color = 'black';
            document.querySelector('.container #pp').style.color = 'rgb(97, 95, 95)';
            document.querySelector('.parent').style.display = 'flex';
            document.querySelector('.parent2').style.display = 'none';
            document.querySelector('.monthly').style.display = 'block';
            document.querySelector('.yearly').style.display = 'none';
        }
    });
};
