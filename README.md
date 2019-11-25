# README
## userテーブル
|Column|Type|Options|
|------|----|-------|
|email|string|null: false|
|password|string|null: false|
|username|string|null: false|
### Association
- has_many :groups, through: :groups_users
- has_many :messages

## groupテーブル
|Column|Type|Options|
|------|----|-------|
|group_name|string|null: false|
|adding_users|string|null: false|
|user|string|null: false|
### Association
- has_many :user, through: : :groups_users
- has_many :messages
- 

## messagesテーブル
|Column|Type|Options|
|------|----|-------|
|image|text|
|text|text|null: false|
|user_id|integer|null: false, foreign_key: true|
|tweet_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :user
- belongs_to :group


## groups_usersテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user