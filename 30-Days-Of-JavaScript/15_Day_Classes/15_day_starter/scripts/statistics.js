class statistics {
    constructor(arr) {
        this.arr = arr;
        this.result;
    }
    count() {
        let arr = this.arr
        return arr.length
    }
    sum() {
        let arr = this.arr
        let sum = arr.reduce((acc, cur) => {
            return acc + cur
        }, 0)
        return sum;
    }
    min() {
        let arr = this.arr
        let min = arr[0]
        for (let x of arr) {
            if (x < min)
                min = x;
        }
        return min;
    }
    max() {
        let arr = this.arr
        let max = arr[0]
        for (let x of arr) {
            if (x > max)
                max = x;
        }
        return max;
    }
    range() {
        let min = this.min()
        let max = this.max()
        return max - min;
    }
    mean() {
        let sum = this.sum()
        let count = this.count()
        return (sum / count).toFixed(0);
    }
    median() {
        let arr = this.arr
        arr.sort(function (a, b) {
            return a - b
        })
        let count = this.count()
        return count % 2 ? arr[Math.floor(count / 2)] : (arr[count / 2] + arr[count / 2 - 1]) / 2;
    }
    mode() {
        let arr = this.arr
        let SetArr = new Set(arr)
        let result = []
        for (let element of SetArr) {
            let elCount = arr.filter(x => x == element).length
            result.push({ element: element, count: elCount })
        }
        result = result.sort(function (a, b) {
            if (a.count < b.count) return 1;
            if (a.count > b.count) return -1;
            return 0;
        })
        this.result = result;
        return `(${result[0].element}, ${result[0].count})`
    }
    var() {
        let arr = this.arr;
        let mean = this.mean();
        let count = this.count()
        let soorat = arr.map(x => (x - mean) ** 2).reduce((acc, cur) => acc + cur);
        let variance = soorat / count;
        return variance
    }
    std() {
        let variance = this.var()
        let std = Math.sqrt(variance)
        return std.toFixed(1);
    }
    freqDist() {
        let result = this.result;
        let count = this.count();
        let freq = result.map(x => {
            let percent = (x.count / count * 100).toFixed(1);
            return `(${percent}, ${x.element})`
        })
        return `[${freq.join(', ')}]`;
    }


}
let ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]
const c = new statistics(ages)
console.log('Count:', c.count())
console.log('Sum:', c.sum())
console.log('Min:', c.min())
console.log('Max:', c.max())
console.log('Range:', c.range())
console.log('Mean:', c.mean())
console.log('Median:', c.median())
console.log('Mode:', c.mode())
console.log('Variance:', c.var())
console.log('Standard Deviation:', c.std())
console.log('Frequency Distribution:', c.freqDist())
