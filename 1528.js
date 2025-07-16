var restoreString = function (s, indices) {
    let nothing = [];
    for (let i = 0; i < s.length; i++) {
        nothing[indices[i]] = s[i]
    };
    return nothing.join('');
};