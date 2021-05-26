require 'pry'

def transform(char1, char2)
  "abc".gsub(/[#{char1}#{char2}]/, "")
end

def reduce(str)
  count = 0
  chars = str.chars

  loop do
    result = []
    current_ind = 0

    while current_ind < chars.size - 1
      if chars[current_ind] != chars[current_ind+1]
        result << transform(chars[current_ind], chars[current_ind+1])
        current_ind += 2
      else
        result << chars[current_ind]
        current_ind += 1
      end
      # binding.pry
    end

    result << chars[-1] if current_ind == chars.size - 1
    # binding.pry
    break if chars == result
    chars = result
  end
  p chars
  chars.size
end
          # 012345
p reduce("abcc") == 1
# p reduce("abcc")


# AAA

# BCAA
# CBAA
# ABCA
# ACBA
# AABC
# AACB