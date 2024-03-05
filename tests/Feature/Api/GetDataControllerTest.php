<?php

namespace Tests\Feature\Api;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
// use Illuminate\Http\Request;
// use App\Models\FrameType;
// use App\Models\Race;
// use App\Models\Attribute;
// use Illuminate\Support\Facades\DB;
// use App\Models\Period;

class GetDataControllerTest extends TestCase
{
    use RefreshDatabase;  // テストの実行前後でデータベースを初期化

    /**
     * A basic feature test example.
     */
    public function test_getFrameTypeData(): void
    {
        $response = $this->get('/api/getData/frameTypes');

        $response->assertJson([]);
    }

    public function test_getRaceData(): void
    {
        $response = $this->get('/api/getData/races');

        $response->assertJson([]);
    }

    public function test_getAttributeData(): void
    {
        $response = $this->get('/api/getData/attributes');

        $response->assertJson([]);
    }

    public function test_getSpellPlayTypeData(): void
    {
        $response = $this->get('/api/getData/playTypes/spell');

        $response->assertJson([]);
    }

    public function test_getTrapPlayTypeData(): void
    {
        $response = $this->get('/api/getData/playTypes/trap');

        $response->assertJson([]);
    }

    public function test_getPeriodData(): void
    {
        $response = $this->get('/api/getData/periods');

        $response->assertJson([]);
    }
}
