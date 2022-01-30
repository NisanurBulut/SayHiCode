class Book:
    def __init__(self, name, author, publish_date):
        self.name = name
        self.author = author
        self.publish_date = publish_date

    def change_publish_date(self, new_publish_date):
        self.publish_date = new_publish_date

    def change_name(self, new_name):
        self.name = new_name

    def get_book_info(self):
        print(f"Book is {self.name} written by {self.author}. It is published at {self.publish_date}")
