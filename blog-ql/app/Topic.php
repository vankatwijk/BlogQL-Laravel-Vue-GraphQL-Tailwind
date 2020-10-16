<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Topic extends Model
{

    protected $fillable = ['name','slug'];

    public function post(): HasMany
    {
        return $this->hasMany(Post::class);
    }
}
