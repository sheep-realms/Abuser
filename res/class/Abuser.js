class Abuser {
    constructor() {
        this.unicodePartition = [
            {name: 'ascii', min: 0x21, max: 0x7e, reg: /[\u0021-\u007e]/},
            {name: 'latin-1', min: 0xa1, max: 0xff, reg: /[\u00a1-\u00ff]/},
            {name: 'latin-ex-a', min: 0x100, max: 0x17f, reg: /[\u0100-\u017f]/},
            {name: 'latin-ex-b', min: 0x180, max: 0x024f, reg: /[\u0180-\u024f]/},
            {name: 'ipa', min: 0x250, max: 0x2af, reg: /[\u0250-\u02af]/},
            {name: 'sml', min: 0x2b0, max: 0x2ff, reg: /[\u02b0-\u02ff]/},
            {name: 'cdm', min: 0x300, max: 0x36f, reg: /[\u0300-\u036f]/},

            {name: 'cjk-rs', min: 0x2e80, max: 0x2eff, reg: /[\u2e80-\u2eff]/},
            {name: 'kangxi', min: 0x2f00, max: 0x2fdf, reg: /[\u2f00-\u2fdf]/},
            {name: 'idc', min: 0x2ff0, max: 0x2fff, reg: /[\u2ff0-\u2fff]/},
            {name: 'cjk-sp', min: 0x3000, max: 0x303f, reg: /[\u3000-\u303f]/},
            {name: 'hiragana', min: 0x3040, max: 0x309f, reg: /[\u3040-\u309f]/},
            {name: 'katakana', min: 0x30a0, max: 0x30ff, reg: /[\u30a0-\u30ff]/},
            {name: 'bopomofo', min: 0x3100, max: 0x312f, reg: /[\u3100-\u312f]/},
            {name: 'hcj', min: 0x3130, max: 0x318f, reg: /[\u3130-\u318f]/},
            {name: 'kanbun', min: 0x3190, max: 0x319f, reg: /[\u3190-\u319f]/},
            {name: 'bopomofo-ex', min: 0x31a0, max: 0x31bf, reg: /[\u31a0-\u31bf]/},
            {name: 'cjk-s', min: 0x31c0, max: 0x31ef, reg: /[\u31c0-\u31ef]/},
            {name: 'katakana-pe', min: 0x31f0, max: 0x31ff, reg: /[\u31f0-\u31ff]/},
            {name: 'e-cjk-lm', min: 0x3200, max: 0x32ff, reg: /[\u3200-\u32ff]/},
            {name: 'cjk-c', min: 0x3300, max: 0x33ff, reg: /[\u3300-\u33ff]/},
            {name: 'cjk-ui-ex-a', min: 0x3400, max: 0x4dbf, reg: /[\u3400-\u4dbf]/},
            {name: 'yijing', min: 0x4dc0, max: 0x4dff, reg: /[\u4dc0-\u4dff]/},
            {name: 'cjk-ui', min: 0x4e00, max: 0x9fff, reg: /[\u4e00-\u9fff]/},
        ];
        this.unicodeIndex = [
            [0x2e80, 7],
            [0x3000, 10],
            [0x3400, 21],
        ]
    }

    static __random(max, min = 0) {
        return Math.round(Math.random() * (max - min) + min);
    }

    static __c2u(chr) {
        return chr.charCodeAt();
    }
    
    static __u2c(num) {
        return String.fromCharCode(num);
    }

    obfuscation(value, nomark = false) {
        let chrs = String(value).split('');
        let output = '';
        chrs.forEach(e => {
            let c = e;
            let cu = Abuser.__c2u(c);
            let i = 0

            if (nomark && e.search(/[\u0020-\u002f\u003a-\u0040\u005b-\u0060\u007b-\u007e]/) != -1) {

            } else {
                if (cu > this.unicodeIndex[0]) {
                    this.unicodeIndex.forEach(e2 => {
                        if (cu >= e2[0]) {
                            i = e2[1];
                        }
                    });
                }
                
                for (i; i < this.unicodePartition.length; i++) {
                    if (e.search(this.unicodePartition[i].reg) != -1) {
                        c = Abuser.__u2c(
                            Abuser.__random(
                                this.unicodePartition[i].max,
                                this.unicodePartition[i].min
                            )
                        );
                        break;
                    }
                }
            }
            
            output += c;
        });
        return output;
    }

    chrSort(value) {
        let chrs = String(value).split('');
        return chrs.sort().join('');
    }

    caesar(value, move = 3, nomark = false) {
        let chrs = String(value).split('');
        let output = '';

        chrs.forEach(e => {
            if (nomark && e.search(/[\u0020-\u002f\u003a-\u0040\u005b-\u0060\u007b-\u007e]/) != -1) {
                output += e;
            } else {
                let u = Abuser.__c2u(e);
                u += move;
                output += Abuser.__u2c(u);
            }
            
        });

        return output;
    }

    reverse(value) {
        let chrs = String(value).split('');
        return chrs.reverse().join('');
    }
}