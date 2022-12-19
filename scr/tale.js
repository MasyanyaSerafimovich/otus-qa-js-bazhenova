function kolobok(name) {
    switch (name) {
        case 'дедушка':
            console.log('Я от дедушки ушел');
            break;
        case 'заяц':
            console.log('Я от зайца ушел');
            break;
        case 'лиса':
            console.log('Меня съели');
            break;
        default:
            console.log('Неизвестный персонаж');
    }
}

function NewYear(name) {

    function resultPrinter(printedInfo) {
        console.log(`${printedInfo}! ${printedInfo}! ${printedInfo}!`);
    }

    switch (name) {
        case 'Дед Мороз':
            resultPrinter('Дед Мороз');
            break;
        case 'Снегурочка':
            resultPrinter('Снегурочка');
            break;
        default:
            console.log(`Неизвестный персонаж`);
    }
}

console.log(`\n`)

kolobok('дедушка');
kolobok('заяц');
kolobok('лиса');
kolobok('волк');

console.log(`\n`)

NewYear('Дед Мороз');
NewYear('Снегурочка');
NewYear('Снеговик');

console.log(`\n`)