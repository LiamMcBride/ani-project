class Series:
    def __init__(self, name, author, type, total_episodes):
        self.name = name
        self.author = author
        self.type = type
        self.total_episodes = total_episodes

    def export(self):
        return (f"{self.name} {self.author} {self.type} {self.total_episodes}")