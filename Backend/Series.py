import json

class Series:
    def __init__(self, name, author, progress, type, total_episodes, rating):
        self.name = name
        self.author = author
        self.progress = progress
        self.type = type
        self.total_episodes = total_episodes
        self.rating = rating

    def export(self):
        return (f"{self.name} {self.author} {self.type} {self.total_episodes}")
    
    def export_dict(self):
        data = {
            "title": self.name,
            "progress": self.progress,
            "rating": self.rating
        }
        return data

    def export_json(self):
        data = self.export_dict()
        json_data = json.dumps(data)
        return json_data

    