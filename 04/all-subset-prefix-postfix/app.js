const test_case = "hello"; function generate_all_subsets(text) {const all_subsets = []; for (let low_boundary = 0; low_boundary <= text.length; low_boundary += 1) {for (let high_boundary = low_boundary; high_boundary <= text.length; high_boundary += 1) {all_subsets.push(text.substring(low_boundary, high_boundary)); }; }; return all_subsets.filter(x => (x !== ``)); ; }; const all_subsets = generate_all_subsets(test_case); console.log("All subsets (", all_subsets.length, ") are:", all_subsets); function generate_all_prefixes(text) {const all_prefixes = []; for (let index = 0; index <= text.length; index += 1) {all_prefixes.push(text.substring(0, index)); }; return all_prefixes; ; }; const all_prefixes = generate_all_prefixes(test_case); console.log("All prefixes (", all_prefixes.length, ") are: ", all_prefixes); function generate_all_postfixes(text) {const all_postfixes = []; for (let index = text.length; index >= 0; index -= 1) {all_postfixes.push(text.substring(index, text.length)); }; return all_postfixes; ; }; const all_postfixes = generate_all_postfixes(test_case); console.log("All postfixes (", all_postfixes.length, ") are: ", all_postfixes.reverse()); 