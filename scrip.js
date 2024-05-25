#include <stdio.h>
#include <string.h>


int stringlength(char str[]) {
    int length = 0;
    while (str[length] != '\0') {
        length++;
    }
    return length;
}
void UpdateCharacter(char str[], int n, char c) {
    for (int i = 0; i < n; i++) {
        if (str[i] == ' ') {
            str[i] = c;
        }
    }
}
int main() {
    char input_string[1000];
    char update_char;

    printf("Enter a string: ");
    fgets(input_string, sizeof(input_string), stdin);
    input_string[strcspn(input_string, "\n")] = '\0'; // Remove newline character
    
    printf("Enter a character to replace spaces: ");
    scanf(" %c", &update_char);
    
    int length = stringlength(input_string);

    UpdateCharacter(input_string, length, update_char);

    printf("Updated string: %s\n", input_string);
    
    return 0;
}
