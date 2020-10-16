# Vicoders Drone Plugin Secret To WP Config

- [Vicoders Drone Plugin Secret To WP Config](#vicoders-drone-plugin-secret-to-wp-config)
  - [Usage](#usage)

<a name="usage"></a>

## Usage

```
kind: pipeline
name: default

steps:
- name: env
  image: nightfuryest/drone-plugin-secret-to-wp-config
  settings:
    template: wp-config-prod.template
    file: wp-config.php
    envs:
      - DB_HOST
      - DB_USER
      - DB_PASSWORD
    DB_HOST:
      from_secret: DB_HOST
    DB_USER:
      from_secret: DB_USER
    DB_PASSWORD:
      from_secret: DB_PASSWORD
```