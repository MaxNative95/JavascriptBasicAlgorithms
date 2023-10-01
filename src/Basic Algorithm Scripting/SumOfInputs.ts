const validator = (nums: Array<number>, target: number) => {
    const indexes : Array<number> = []; //need to push to arr the index
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] + nums[i + 1] === target) {
            indexes.push(i)
            indexes.push(i + 1)
            return console.log(target, "TARGET", indexes, "INDEXES")
        }
    }
    return indexes
};

validator([2, 7, 11, 15], 9);
validator([2, 7, 11, 15], 18);
validator([2, 7, 11, 15], 26);
