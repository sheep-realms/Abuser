const DB_abuser = [
    {
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
        name: 'chrSort',
        title: '字符排序',
        parameter: []
    }, {
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
        name: 'reverse',
        title: '翻转',
        parameter: []
    }
];