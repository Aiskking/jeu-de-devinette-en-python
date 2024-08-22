import random

def guessing_game():
    number_to_guess = random.randint(1, 100)
    guess = None
    attempts = 0

    print("Bienvenue dans le jeu de devinette !")
    print("Devinez le nombre entre 1 et 100.")

    while guess != number_to_guess:
        try:
            guess = int(input("Entrez votre devinette : "))
            attempts += 1

            if guess < number_to_guess:
                print("Trop bas ! Essayez encore.")
            elif guess > number_to_guess:
                print("Trop haut ! Essayez encore.")
            else:
                print(f"Félicitations ! Vous avez deviné le nombre en {attempts} essais.")
        except ValueError:
            print("Veuillez entrer un nombre valide.")

guessing_game()
