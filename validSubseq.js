function validSubsequence(ints, seq) {
  let current_seq_index = 0;
  for (let i = 0; i < ints.length; i += 1) {
    if (ints[i] == seq[current_seq_index]) {
      current_seq_index += 1;
    }
  }
  return (current_seq_index === seq.length);
}