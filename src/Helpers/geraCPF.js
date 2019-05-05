var helper = {
    random: function random(n) {
        return Math.round(Math.random() * n);
    },
    mod: function mod(dividend, divisor) {
        return Math.round(dividend - (Math.floor(dividend / divisor) * divisor));
    },

    sumNumbers: function sumNumbers(numbers) {
        return numbers.slice().reverse().reduce(function (a, b, i) {
            return a + (b * (i + 2));
        }, 0);
    },
    defaultMask: 'xxx.xxx.xxx-xx',
    defaultPlaceholder: 'x',
    gerarCPF: function (mask, placeholder) {
        
        var numbers = [];
        var last;
        var result;

        while (numbers.length < 9) {
            numbers[numbers.length] = this.random(9);
        }

        while (numbers.length < 11) {
            last = 11 - this.mod(this.sumNumbers(numbers), 11);

            if (last >= 10) {
                last = 0;
            }

            numbers[numbers.length] = last;
        }

        result = numbers.join('');

        if (typeof mask === 'boolean' && mask) {
            mask = this.defaultMask;
        }

        if (mask && mask.length) {
            if (typeof placeholder === 'undefined') {
                placeholder = this.defaultPlaceholder;
            }

            if (mask.match(new RegExp(placeholder, 'g')).length < 11) {
                throw new Error('The CPF mask should contain 11 placeholders');
            }

            var placeholderRegex = new RegExp(placeholder);
            var i = -1;

            while (++i < 11) {
                mask = mask.replace(placeholderRegex, result[i]);
            }

            result = mask;
        }

        return result;
    },
    gerarCNPJ: function( comPontos) {

        var cnpj = '';

        var n = 9;
        var n1 = this.random(n);
        var n2 = this.random(n);
        var n3 = this.random(n);
        var n4 = this.random(n);
        var n5 = this.random(n);
        var n6 = this.random(n);
        var n7 = this.random(n);
        var n8 = this.random(n);
        var n9 = 0; // random(n);
        var n10 = 0; // random(n);
        var n11 = 0; // random(n);
        var n12 = 1; // random(n);
        var d1 = n12 * 2 + n11 * 3 + n10 * 4 + n9 * 5 + n8 * 6 + n7 * 7 + n6 * 8
                + n5 * 9 + n4 * 2 + n3 * 3 + n2 * 4 + n1 * 5;
        d1 = 11 - (this.mod(d1, 11));
        if (d1 >= 10)
            d1 = 0;
        var d2 = d1 * 2 + n12 * 3 + n11 * 4 + n10 * 5 + n9 * 6 + n8 * 7 + n7 * 8
                + n6 * 9 + n5 * 2 + n4 * 3 + n3 * 4 + n2 * 5 + n1 * 6;
        d2 = 11 - (this.mod(d2, 11));
        if (d2 >= 10)
            d2 = 0;
        if (comPontos)
            cnpj = '' + n1 + n2 + '.' + n3 + n4 + n5 + '.' + n6 + n7 + n8 + '/'
                    + n9 + n10 + n11 + n12 + '-' + d1 + d2;
        else
            cnpj = '' + n1 + n2 + n3 + n4 + n5 + n6 + n7 + n8 + n9 + n10 + n11
                    + n12 + d1 + d2;
    
        return cnpj;
    
    },
    generateRandomString: function(num){
        return Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, num);
    }
};

export default helper