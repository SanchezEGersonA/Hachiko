<?php

use Faker\Provider\Base;
 
class StudentProvider extends Base
{
    protected static $jobTitles = [
        'Paralegal', 'Lawyer', 'Litigation Executive', 'Counsel', 'Solicitor', 'Barrister', 'Judge', 'Chartered Legal Executive', 'Attorney', 'General Counsel', 'Deputy General Counsel', 'Corporate Counsel', 'Brand Counsel', 'Contracts Manager', 'Compliance Manager', 'Patent Litigation Counsel', 'Patent Agent'
 
    ];
 
    protected static $firmFormats = array(
        '{{firstName}} {{lastName}} {{firmSuffix}}',
        '{{lastName}} {{firmSuffix}}',
        '{{lastName}} & {{lastName}}',
        '{{word}} Law'
    );
 
    protected static $firmSuffix = array('Law Firm', 'Law', 'Solicitors', 'Group', 'Lawyers');
 
    /**
     * @example 'Lawyer'
     */
    public function jobTitle()
    {
        return static::randomElement(static::$jobTitles);
    }
 
    /**
     * @example 'Group'
     */
    public static function firmSuffix()
    {
        return static::randomElement(static::$firmSuffix);
    }
 
     /**
     * @example 'Acme Group'
     */
    public function firm()
    {
        $format = static::randomElement(static::$firmFormats);
        return $this->generator->parse($format);
    }

}