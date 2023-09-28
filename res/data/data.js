const DB_abuser = [
    {
        type: 'group',
        title: 'Nuclear'
    }, {
        type: 'item',
        name: 'obfuscation',
        title: '混淆',
        parameter: [
            {
                type: 'boolean',
                label: '不要替换基本ASCII标点符号',
                default: false
            }
        ]
    }, {
        type: 'item',
        name: 'chrSort',
        title: '字符排序',
        parameter: []
    }, {
        type: 'group',
        title: 'Abuser'
    }, {
        type: 'item',
        name: 'caesar',
        title: '凯撒密码',
        parameter: [
            {
                type: 'number',
                label: '位移',
                default: 3
            }, {
                type: 'boolean',
                label: '不要替换基本ASCII标点符号',
                default: false
            }
        ]
    }, {
        type: 'item',
        name: 'reverse',
        title: '翻转',
        parameter: []
    }, {
        type: 'group',
        title: 'Joker'
    }, {
        type: 'item',
        name: 'insert',
        title: '插入',
        parameter: [
            {
                type: 'text',
                label: '插入的内容',
                default: '',
                tip: '若留空则使用零宽不折行空格（U+FEFF）。'
            }
        ]
    }
];