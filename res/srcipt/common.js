$(document).on('click', '.checkbox', function() {
    let v = $(this).children('input').val();
    if (v == 'false') {
        $(this).children('input').val(true);
        $(this).addClass('selected');
        $(this).attr('aria-selected', 'true');
        if ($(this).hasClass('collapse-checkbox')) {
            $(this).parents('.collapse').children('.collapse-content').removeClass('hide');
        }
    } else {
        $(this).children('input').val(false);
        $(this).removeClass('selected');
        $(this).attr('aria-selected', 'false');
        if ($(this).hasClass('collapse-checkbox')) {
            $(this).parents('.collapse').children('.collapse-content').addClass('hide');
        }
    }
});

$(document).on('click', '.abuser-fn-item', function() {
    let name = $(this).data('name');
    $('.abuser-fn-item').attr('aria-selected', false);
    $(`.abuser-fn-item[data-name="${name}"]`).attr('aria-selected', true);

    loadFn(name);
});

$(document).ready(function() {
    let side = '';
    DB_abuser.forEach(e => {
        switch (e.type) {
            case 'item':
                side += FormConstructor.sideItem(e.name, e.title);
                break;

            case 'group':
                side += FormConstructor.sideGroup(e.title);
                break;
        
            default:
                break;
        }
        
    });
    $('#side').html(side);
    $('.abuser-fn-item').eq(0).click();

    $('#output').click(function() {
        let objFn = findFn(nowFn);
        let parameter = [];

        for(let i = 0; i < objFn.parameter.length; i++) {
            let v = $(`.form-item-${i}`).val();
            if (objFn.parameter[i].type == 'boolean') {
                v = holyshitBoolean(v);
            } else if (objFn.parameter[i].type == 'number') {
                v = Number(v);
            }
            parameter.push(v);
        }

        let str = abuser[nowFn](
            $('#text').val(),
            ...parameter
        );

        $('#text').val(str);
        $('#text').focus();
        $('#text').select();
    });
    
    $('#clear').click(function() {
        $('#text').val('');
        let $sel = $('.abuser-form-item');
        for (let i = 0; i < $sel.length; i++) {
            $sel.eq(i).val($sel.eq(i).data('default'));
        }
        $sel = $('.checkbox');
        for (let i = 0; i < $sel.length; i++) {
            let d = $sel.eq(i).children('input');
            if (String(d.val()) != String(d.data('default'))) {
                $sel.eq(i).click();
            }
        }
    });
});



let nowFn = '';

const type2ctf = {
    text: 'input',
    number: 'inputNum',
    boolean: 'checkbox'
};

let formIndex = 0;

function findFn(value) {
    return DB_abuser.find(function(e) { return e.name == value });
}

function loadFn(value) {
    let obj = findFn(value);
    if (obj == undefined) return;

    nowFn = value;
    $('#abuser-parameter-form-list').text('');
    formIndex = 0;
    let dom = '';
    
    obj.parameter.forEach(e => {
        dom += FormConstructor[type2ctf[e.type]](
            formIndex++,
            e.label,
            e.default,
            e?.tip ? e.tip : ''
        );
    });

    $('#abuser-parameter-form-list').html(dom);
}

function holyshitBoolean(value) {
    switch (value) {
        case 0:
        case '0':
        case 'false':
            return false;
        
        case 1:
        case '1':
        case 'true':
            return true;
    
        default:
            return value;
    }
}