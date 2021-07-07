let age = prompt("Enter your Age");
        if (age < 18) {
            alert("Наши трансляции не предназначены для лиц моложе 18 лет. Вы будете перенаправлены");
            window.location.href = "http://www.google.com"
        }
        else if (age >= 18) {
            alert("Приветствуем на LifeSpot! " + new Date().toLocaleString());

        }