<?php

use App\Post;
use App\User;
use App\Topic;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UserSeeder::class);
        factory(User::class, 20)->create();

        Topic::create(['name' => 'Featured Sites', 'slug' => 'featured']);
        Topic::create(['name' => 'Useful Links', 'slug' => 'links']);
        Topic::create(['name' => 'Guides & Tutorials', 'slug' => 'tutorials']);


        factory(Post::class, 20)->create();

    }
}
