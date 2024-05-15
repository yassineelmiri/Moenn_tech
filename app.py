import os
from random import randint
import subprocess
from datetime import datetime, timedelta

# Définir les dates de début et de fin
start_date = datetime(2024, 5, 15)
end_date = datetime(2024, 6, 27)

# Boucle pour chaque jour dans la plage de dates spécifiée
current_date = start_date
while current_date < end_date:
    date_str = current_date.strftime('%Y-%m-%d')
    for _ in range(randint(1, 10)):
        # Générer une heure, minute et seconde aléatoires
        random_hour = randint(0, 23)
        random_minute = randint(0, 59)
        random_second = randint(0, 59)
        commit_datetime = datetime(
            current_date.year,
            current_date.month,
            current_date.day,
            random_hour,
            random_minute,
            random_second
        )
        commit_date_str = commit_datetime.strftime('%Y-%m-%dT%H:%M:%S')

        # Écrire dans le fichier
        with open('file.txt', 'a') as file:
            file.write(f'Commit on {commit_date_str}\n')

        # Ajouter les changements
        subprocess.run(['git', 'add', '.'])

        # Faire le commit avec une date spécifique
        subprocess.run(['git', 'commit', '--date', commit_date_str, '-m', f'Commit on {commit_date_str}'])

    # Passer au jour suivant
    current_date += timedelta(days=1)

# Pousser tous les commits vers la branche principale
subprocess.run(['git', 'push', '-u', 'origin', 'main'])
