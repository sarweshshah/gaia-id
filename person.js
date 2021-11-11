let diColors;

class Person {
  constructor(_person) {
    this.name = _person.name;
    this.role = _person.role;
    this.email = _person.email;
    this.experience = _person.experience;
    this.id = this.generatePersonID();
    this.colors = this.assignPersonColor(this.role);
    this.qualities = this.assignPersonQual(this.role);
    this.persona = "Attendee";
  }

  generatePersonID() {
    return this.hashcode(this.email);
  }

  assignPersonColor(role) {
    if (role === "Design Professional") {
      return [color("#b16acf"), color("#dddddd")]; // purple
    } else if (role === "Freelancer") {
      return [color("#c93b3b"), color("#dddddd")]; // red
    } else if (role === "Entrepreneur") {
      return [color("#29b85d"), color("#dddddd")]; // green
    } else if (role === "Researcher") {
      return [color("#37b5ac"), color("#dddddd")]; // kepel
    } else if (role === "Student") {
      return [color("#e19121"), color("#dddddd")]; // orange
    } else if (role === "Other") {
      return [color("#E3C766"), color("#dddddd")]; // yellow
    }
  }

  assignPersonQual(role) {
    if (role === "Design Professional") {
      return "Thoughtful.\nOriginal.\nCreative.";
    } else if (role === "Freelancer") {
      return "Independent.\nActive.\nBold.";
    } else if (role === "Entrepreneur") {
      return "Seekers.\nPassionate.\nDetermined.";
    } else if (role === "Researcher") {
      return "Empathetic.\nObserver.\nAnalyst.";
    } else if (role === "Student") {
      return "Inquisitive.\nThoughtful.\nExperimental.";
    } else if (role === "Other") {
      return "Explorers.\nCreative.\nExperimental.";
    }
  }

  roleToString(role) {
    if (role === "Design Professional") {
      return "You are a\nDesign Professional";
    } else if (role === "Freelancer") {
      return "You are a\nFreelancer";
    } else if (role === "Entrepreneur") {
      return "You are an\nEntrepreneur";
    } else if (role === "Researcher") {
      return "You are a\nResearcher";
    } else if (role === "Student") {
      return "You are a\nStudent";
    } else if (role === "Other") {
      return "You are an\nOther";
    }
  }

  /**
   * Returns a hash code for a string.
   * (Compatible to Java's String.hashCode())
   *
   * The hash code for a string object is computed as
   *     s[0]*31^(n-1) + s[1]*31^(n-2) + ... + s[n-1]
   * using number arithmetic, where s[i] is the i th character
   * of the given string, n is the length of the string,
   * and ^ indicates exponentiation.
   * (The hash value of the empty string is zero.)
   *
   * @param {string} s a string
   * @return {number} a hash code value for the given string.
   */
  hashcode(str) {
    let h = 0;
    let l = str.length;
    let i = 0;
    if (l > 0) {
      while (i < l) {
        h = ((h << 5) - h + str.charCodeAt(i++)) | 0;
      }
    }

    // Change sign to positive
    if (h < 0) {
      h = h * -1;
    }
    
    return int(h % 100000);
  }
}
